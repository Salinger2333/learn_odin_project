/*
** Gameboard 代表了棋盘的状态
** 每个方格都包含一个 Cell（稍后定义）
** 我们提供一个 dropToken 方法，以便能够向方格中添加 Cell
*/

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  // 创建一个二维数组来表示游戏棋盘的状态
  // 对于这个二维数组，第 0 行代表最顶行，
  // 第 0 列代表最左列。
  // 这种嵌套循环技术是创建二维数组的一种简单而常见的方法。
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  // 这个方法将用于获取整个棋盘，我们的
  // UI 最终需要用它来渲染棋盘。
  const getBoard = () => board;

  // 为了放置一个棋子，我们需要找到所选列的
  // 最低点，*然后*将该单元格的值更改为玩家编号
  const dropToken = (column, player) => {
    // 我们棋盘的最外层数组代表行，
    // 所以我们需要从第 0 行开始遍历所有行，
    // 找到所有没有棋子的行，然后取
    // 最后一个，它将代表最底部的空格子
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    // 如果没有单元格通过筛选，
    // 则该移动无效。停止执行。
    if (!availableCells.length) return;

    // 否则，我有一个有效的单元格，即筛选后数组中的最后一个
    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };

  // 这个方法将用于在控制台中打印我们的棋盘。
  // 在我们游戏时，每回合后看看棋盘的样子是很有帮助的，
  // 但在我们构建 UI 后就不再需要它了
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.table(boardWithCellValues);
  };

  // 在这里，我们为应用程序的其余部分
  // 提供一个与棋盘交互的接口
  return { getBoard, dropToken, printBoard };
}

/*
** Cell 代表棋盘上的一个“方格”，可以具有以下值之一：
** 0: 方格中没有棋子，
** 1: 玩家一的棋子，
** 2: 玩家二的棋子
*/

function Cell() {
  let value = 0;

  // 接受一个玩家的棋子来改变单元格的值
  const addToken = (player) => {
    value = player;
  };

  // 我们将如何通过闭包来获取此单元格的当前值
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** GameController 负责控制
** 游戏回合的流程和状态，以及
** 是否有任何人赢得了游戏
*/
function GameController(
  playerOneName = "玩家一",
  playerTwoName = "玩家二"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`轮到 ${getActivePlayer().name}。`);
  };

  const playRound = (column) => {
    // 为当前玩家放置一个棋子
    console.log(
      `正在将 ${getActivePlayer().name} 的棋子放入第 ${column} 列...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  这里是我们将检查胜利者并处理相关逻辑的地方，
        例如显示胜利消息。 */

    // 切换玩家回合
    switchPlayerTurn();
    printNewRound();
  };

  // 初始游戏消息
  printNewRound();

  // 对于控制台版本，我们只会使用 playRound，但 UI 版本将需要
  // getActivePlayer，所以我现在就把它暴露出来
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();