### Steps for this game development

## Name of Game: Concentration Game!

+---------------------------+
| CONCENTRATION |
| CARD NAME |
+---------------------------+
| \***\*\*\*\*** |
| \*_ \*\* |
| _ \* \* _ |
| _ **\*** _ |
| _ \* |
| \*\* ** |
| **\*\*\*\*\*\*\* |
| |
| Type: Generic Creature |
| |
| Effects: Fry brains |
| when played. |
+---------------------------+

Link: https://krynite.github.io/Project-1-ConcentrationCardGame/

## Description

Section A:
A single Word is passed onto two cards.

Section B:
Two cards are passed into the table area for the user to select.

Section C: This was done last.
Two cards enter the table area hidden. Meaning the user cannot see the words. And remain hidden.
Difficulty will decide how many cards on the table.

Section D:
User will select two cards. ONLY two cards are allowed to be revealed at a time.
Show visual indicator that cards are selected.
Depending on the difficulty, cards are hidden or revealed.

Section E:
Once 2 cards are revealed, if it DOESN'T MATCH. Revealed cards will be flipped and be hidden again.
NOT MATCHED:
Cards return to being hidden again.
(Optional: Penalty after 4 MISMATCH? -1 seconds?)

Section F:
Once 2 cards are revealed, if it MATCH. Two cards will have visual indicator. Allowing the user to match others until all cards are cleared.
Once MACTHED:
Visual indicator
Scoreboard gets updated
Extension of time? (Optional +1 seconds?)

Section G:
Once all cards are cleared, a new set of cards will be placed on the table.
Table CLEARED
New set of cards appear
Scoreboard gets an additional CLEAR board point (Optional)
Extension of time? (Optional +5 seconds?)

Section H:
Game keeps running till you have run out of time.
Global Score Updated (Summary Display)
Instructions displayed before game starts || on a static location.

## Tech Used:

Codepen, JS, HTML, CSS

Future Enhancements:

1. Add Time extension when a table clear happens.
2. Add Render to cycle between states.
3. Balanced scoring system.
4. Have leadership board.
5. Add penalty of some sort after every 4 mismatch. Penalty: Reshuffle or Cards or reduced countdown timer.

## Attributions:

## Reflection:

1. Need a better flow. Like a flowchart with inputs and outputs. To have a better vision of how data flows.
2. I had a hard time understanding on recursive functions. AKA function loops in a game. Always afraid that I will go into infinite loop.
3. Sometimes its just easier to add/remove a class to an element.
4. <select> it works as a boolean, but it you use the .value, it wont work. will only work with .selectedOption[0].
5. if you want to use "this", function that "this" is in must be the standard function.
6. Need more clarity when using console.dir(class)
7. document.querySelectionAll has some restricted use.
8. You can have multi callback functions in "addEventListener". Either all in one line, or multiple lines of "addEventListener" to one "document.querySelector"
9. In all situations, calling functions are ALWAYS has hierachy priority.
10. Declarations in global scope vs in-function scope has a big difference.
11. Name functions well. Else it confuses you.
