
from platform import node


def print_instructions(start: str, directions: list[str], end: str) -> str:  

        instructions = "\033[4mEVACUATION ROUTE INSTRUCTIONS:\033[0m\n"

        # destination
        instructions += f"Starting Location: {start}\nDestination: {end}\n\n"

        # route
        instructions += "Location Path:\n"
        
        for i in range(len(directions)):

          instructions += f" {i+1}. From {start} proceed to {directions[i]}\n"

          start = directions[i]

        return instructions

# directions = list of points in order

# def main():

#     end = "K"
#     start = "A"
#     directions = ["C", "E", "G", "J", "K"]

#     # start
#     result = print_instructions(start, directions, end)
#     print(result)

# if __name__ == "__main__":
#     main()