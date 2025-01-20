What advice would you give to yourself if you were to start a project like this again?
 
If I were to start this project again, I would focus on breaking the game mechanics into small, testable pieces and implement them one at a time. Starting with a clear plan for the grid system, block generation, and user interaction would make debugging easier. I would also prioritize creating reusable and modular functions to handle specific tasks like block placement or game state transitions, which would simplify updates and future enhancements.

Did you complete everything in your “needs to have” list?

Yes, all the essential features were implemented successfully. This includes a functional grid system, draggable blocks, proper placement logic, scoring, and transitions between start, gameplay, and end screens. Additionally, I included the condition to check when no valid moves are left, ensuring the game ends properly. While some enhancements like animations were beyond the scope, the core functionality works seamlessly.



What was the hardest part of the project?

The most challenging part was implementing the block placement mechanics, specifically ensuring that blocks could only fit in valid positions on the grid without overlapping or exceeding boundaries. It required careful planning to accurately translate the block’s grid-based shape into screen coordinates and verify placement validity. Debugging this involved repeatedly testing edge cases, such as blocks near the grid's boundaries or partially overlapping positions.



Were there any problems you could not solve?

One issue that wasn’t fully addressed was snapping blocks to the grid as they’re dragged. While the placement logic works well after releasing a block, implementing a smooth snapping mechanism during dragging proved tricky within the given timeline. This could improve user experience and is something I’d like to revisit in future versions.
