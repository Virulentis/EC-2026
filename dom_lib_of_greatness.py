
from platform import node


def print_instructions(start: str, directions: list[str]) -> None:  

        # destination
        print(f"proceed to location: {start}\n") 

        # route
        
        print("Loaction Path:\n")

        for i in range(len(directions)):

          print(f"From {start} move to {directions[i]}\n")

          start = directions[i]
        

        #instructions to get to destination



# printing outcomes

# list of nodes
# from x go to y

# directions = list of points in order
def main():

    start = "A"
    directions = ["C", "E", "G", "J", "K"]

    # start
    print_instructions(start, directions)

if __name__ == "__main__":
    main()