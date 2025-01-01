### Steps for this game development

## Description

Section A:
A single Word is passed onto two cards.

Section B:
Two cards are passed into the table area for the user to select.

Section C:
Two cards enter the table area hidden. Meaning the user cannot see the words. And remain hidden.
Difficulty will decide how many cards on the table.

Section D:
User will select two cards. ONLY two cards are allowed to be revealed at a time.

Section E:
Once 2 cards are revealed, if it DOESN'T MATCH. Revealed cards will be flipped and be hidden again.
NOT MATCHED:
Cards return to being hidden again.
(Optional: Penalty after 4 MISMATCH? -1 seconds?)

Section F:
Once 2 cards are revealed, if it MATCH. Two cards will disappear. Allowing the user to match others until all cards are cleared.
Once MACTHED:
Cards disappear
Scoreboard gets updated
Extension of time? (Optional +1 seconds?)

Section G:
Once all cards are cleared, a new set of cards will be placed on the table.
Table CLEARED
New set of cards appear
Scoreboard gets an additional CLEAR board point
Extension of time? (Optional +5 seconds?)

Section H:
Game keeps running till you have run out of time.
Global Score Updated
Global Score to list who is highest scored.
Displayed before game starts || on a static location.

### Section A

A single Word is passed onto two cards.

Pre-requisite:
const words = [] - Array of Words (DONE)
randomArrayCardSelection() - Generate random cards via random function for the iteration of the array (DONE)

core:
Pass selected words to two cards (DONE)
INSERT two Cards to table
Function to verify only 2 cards have the same words
Function to iterate all cards on the table.  
 If > 2 words found, reselect 2 words.
