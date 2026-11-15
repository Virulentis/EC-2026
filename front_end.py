import re
import tkinter as tk
from tkinter import ttk, messagebox
from transport import find_route

MAP_IMG_PATH = r"resources/map.png"
START_LOCATIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
TRANSPORT_OPTIONS = ["Car", "Walk"]
CLOSED_PATH_PATTERN = re.compile(r"^([A-Za-z])-?([A-Za-z])$")

class MapApp:

    def __init__(self, root):
        self.root = root
        self.root.title("Map Route Planner")
        self.root.resizable(False, False)

        root.lift()
        root.focus_force()

        #Display Map
        self.image_frame = tk.Frame(self.root)
        self.image_frame.pack(pady=(10, 5), padx=15)

        self.map_photo = tk.PhotoImage(file=MAP_IMG_PATH)
        img_label = tk.Label(self.image_frame, image=self.map_photo)
        img_label.pack()

        #Set Input Options
        self.controls_frame = tk.LabelFrame(self.root, text="Current Status", padx=10, pady=10)
        self.controls_frame.pack(padx=15, pady=5, fill="x")

        self.controls_frame.columnconfigure(0, weight=1)
        self.controls_frame.columnconfigure(1, weight=1)

        #Start Location
        tk.Label(self.controls_frame, text="Start Location:").grid(row=0, column=0, sticky="w", padx=10)

        locations = START_LOCATIONS
        self.start_var = tk.StringVar(value=locations[0])

        self.start_dropdown = ttk.Combobox(self.controls_frame, textvariable=self.start_var, values=locations, state="readonly", width=10)
        self.start_dropdown.grid(row=1, column=0, padx=10, pady=5, sticky="ew")

        #Transport Options
        tk.Label(self.controls_frame, text="Method of Transport:").grid(row=0, column=1, sticky="w", padx=10)
        transports = TRANSPORT_OPTIONS
        self.transport_var = tk.StringVar(value=transports[0])

        self.transport_dropdown = ttk.Combobox(self.controls_frame, textvariable=self.transport_var, values=transports, state="readonly", width=10)
        self.transport_dropdown.grid(row=1, column=1, padx=10, pady=5, sticky="ew")

        #Flooded Regions & Closed Paths (side by side)
        self.lists_frame = tk.Frame(self.root)
        self.lists_frame.pack(padx=15, fill="x")
        self.lists_frame.columnconfigure(0, weight=1, uniform="lists")
        self.lists_frame.columnconfigure(1, weight=1, uniform="lists")

        self.flooded_listbox = self.build_list_frame(self.lists_frame, "Flooded Regions", column=0, validator=self.validate_flooded)
        self.closed_listbox = self.build_list_frame(self.lists_frame, "Closed Paths", column=1, validator=self.validate_closed_path)

        # --- 3. Action Button ---
        self.submit_btn = ttk.Button(self.root, text="Calculate", command=self.on_submit)
        self.submit_btn.pack(pady=10)


    def build_list_frame(self, parent, title, column, validator):
        frame = tk.LabelFrame(parent, text=title, padx=8, pady=8)
        frame.grid(row=0, column=column, sticky="nsew", padx=(0, 5) if column == 0 else (5, 0))
        frame.columnconfigure(0, weight=1)

        entry = ttk.Entry(frame, width=6)
        entry.grid(row=0, column=0, sticky="ew", pady=(0, 5))

        listbox = tk.Listbox(frame, height=3, width=8, selectmode="extended")
        listbox.grid(row=1, column=0, columnspan=2, sticky="ew")

        scrollbar = ttk.Scrollbar(frame, orient="vertical", command=listbox.yview)
        scrollbar.grid(row=1, column=2, sticky="ns")
        listbox.config(yscrollcommand=scrollbar.set)

        add = lambda event=None: self.add_item(entry, listbox, validator)
        ttk.Button(frame, text="Add", width=5, command=add).grid(row=0, column=1, columnspan=2, padx=(5, 0), pady=(0, 5))

        remove = lambda event=None: self.remove_selected(listbox)
        ttk.Button(frame, text="Remove", command=remove).grid(row=2, column=0, columnspan=3, sticky="ew", pady=(5, 0))

        return listbox

    def validate_flooded(self, text):
        letter = text.strip().upper()
        if len(letter) == 1 and letter in START_LOCATIONS:
            return letter
        messagebox.showerror("Invalid Region", f"Flooded region must be a single letter from {START_LOCATIONS[0]}-{START_LOCATIONS[-1]}.")
        return None

    def validate_closed_path(self, text):
        match = CLOSED_PATH_PATTERN.match(text.strip())
        if match:
            a, b = match.group(1).upper(), match.group(2).upper()
            if a in START_LOCATIONS and b in START_LOCATIONS and a != b:
                return f"{a}-{b}"
        messagebox.showerror("Invalid Path", "Closed path must be two different letters, e.g. AB or A-B.")
        return None

    def add_item(self, entry, listbox, validator):
        value = validator(entry.get())
        if value is None:
            return
        if value in listbox.get(0, "end"):
            messagebox.showinfo("Duplicate", f"{value} is already in the list.")
            return
        listbox.insert("end", value)
        entry.delete(0, "end")

    def remove_selected(self, listbox):
        for index in reversed(listbox.curselection()):
            listbox.delete(index)

    def on_submit(self):
        start = self.start_var.get()
        transport = self.transport_var.get()
        flooded = list(self.flooded_listbox.get(0, "end"))
        closed = list(self.closed_listbox.get(0, "end"))
        input_vals = {"start_pos":start, "transport":transport, "flooded":flooded, "closed":closed}
        transport = find_route(start, transport, flooded, closed)


if __name__ == "__main__":
    root = tk.Tk()
    app = MapApp(root)
    root.mainloop()
