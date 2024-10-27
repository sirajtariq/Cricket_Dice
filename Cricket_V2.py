import random

cards = [
    "Single | 1",
    "Double | 2",
    "Triple | 3",
    "Gone Gone FOOUR | 4",
    "Wide ball Missed by WK | 5",
    "Long Long SIXX | 6",
    "No-Ball Free Hit | 1",
    "Wide ball | 1",
    "Run out | 1",
    "Catch out | 1",
    "Stump out | 1",
    "Wicket out | 1",
    "Hit-Wicket out | 1",
    "l.B.W out | 1",
    "Dot Ball | 0"
]

while True:

    computer_Runs = 0
    computer_Wickets = 0
    player_Runs = 0
    player_Wickets = 0
    no_ball_flag = False

    while True:
        computer_Turn = random.randint(0, len(cards) - 1)
        c_Card = int(cards[computer_Turn].split("|")[1])

        if no_ball_flag:
            no_ball_flag = False
            if "Run out" in cards[computer_Turn]:
                computer_Wickets += 1
            else:
                if "out" not in cards[computer_Turn]:
                    computer_Runs += c_Card

        else:
            if "No-Ball" in cards[computer_Turn]:
                computer_Runs += 1
                no_ball_flag = True
            elif "out" in cards[computer_Turn]:
                if not no_ball_flag:
                    computer_Wickets += 1
            elif "out" not in cards[computer_Turn]:
                computer_Runs += c_Card


        print(cards[computer_Turn].split("|")[0])
        print("Computer's Runs: ", computer_Runs)
        print("Computer's Wickets: ", computer_Wickets)

        if computer_Wickets == 5:
            print("Target: ", computer_Runs + 1)
            break

    target = computer_Runs + 1


    while True:
            random.shuffle(cards)
            index = int(input("Pick a card (1-15): ")) - 1

            if index < 0 or index >= len(cards):
                print("Invalid Number. Please Enter an Number Only in 1 to 15.")
            else:
                try:
                    card_value = int(cards[index].split("|")[1])

                    if no_ball_flag:
                        no_ball_flag = False
                        if "Run out" in cards[index]:
                            player_Wickets += 1
                        else:
                            if "out" not in cards[index]:
                                player_Runs += card_value
                    else:
                        if "No-Ball" in cards[index]:
                            player_Runs += 1
                            no_ball_flag = True
                        elif "out" in cards[index]:
                            if not no_ball_flag:
                                player_Wickets += 1
                        elif "out" not in cards[index]:
                            player_Runs += card_value

                    print(cards[index].split("|")[0])
                    print("Total Runs: ", player_Runs)
                    print("Wickets: ", player_Wickets)
                    if player_Runs == computer_Runs and player_Wickets == 5:
                        print("MATCH TIED!!😃")
                        break
                    if player_Runs >= target:
                        print("YOU WON!!😊")
                        break
                    if player_Wickets == 5:
                        print("YOU LOSE!!😢")
                        break
                except IndexError:
                    print("Invalid Number. Please Enter an Number Only in 1 to 15.")
    play_again = input("Do you want to play again? (yes/no): ")
    if play_again.lower() != "yes":
        print("Thanks for Playing!❤")
        break