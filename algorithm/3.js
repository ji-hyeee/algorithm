function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    // 이동할 수 변수 설정 / 가로 세로
    let width = 0;
    let height = 0;
    
    // 합계를 더해줄 변수
    let sum = 0;
  
    // 반복문
    for(let i=0; i<operation.length; i++){
      // 조건문
      // 4가지 경우에 따른 변수 재할당
      if(operation[i]==='R'){
        width++;
      } else if(operation[i]==='L'){
        width--;
      } else if(operation[i]==='D'){
        height++;
      } else if(operation[i]==='U'){
        height--;
      }

      // out 
      if(width < 0 || height < 0){
        return 'OUT'
      }
      
      sum += board[height][width]
    }

    console.log(sum);
  };
  
  const board1 = [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ]
  const output1 = boardGame(board1, 'RRDLLD');
  console.log(output1); // 4
  
  const board2 = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0]
  ]
  const output2 = boardGame(board2, 'UUUDD');
  console.log(output2); // 'OUT'
  
  const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ]
  const output3 = boardGame(board3, 'DDRRRUDUDUD');
  console.log(output3); // 0
  
  // [0][0]
  // count += board[0 > 0+1 = 1][0]//1 
  
  // D, R 
  // +1
  
  // U,L
  // -1
  
  // out 의 경우
  
  // 오른쪽, 왼쪽
  // [0][1]
  // [0][2]
  
  // 위, 아래
  // [0][0]
  // [1][0]
  
  