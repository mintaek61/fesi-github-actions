function solution(priorities: number[], location: number) {
  // 1. 큐에 우선순위와 타겟 여부를 담은 객체를 넣는다.
  const queue = priorities.map((priority, index) => ({
    priority,
    isTarget: index === location,
  }));
  /**
	 priorities:[2, 1, 3, 2], location: 2라면?
	  	{
				queue: [
					{ priority: 2, isTarget: false },
					{ priority: 1, isTarget: false },
					{ priority: 3, isTarget: true },
					{ priority: 2, isTarget: false }
				]
			}
	 */

  let executionCount = 0;

  while (queue.length > 0) {
    // 첫 번째 프로세스를 꺼낸다.
    // 처음: { priority: 2, isTarget: false },
    const currentProcess = queue.shift();

    if (!currentProcess) {
      break;
    }

    // 현재 프로세스보다 우선 순위가 높은 프로세스가 있는지 확인한다.
    // { priority: 2, isTarget: false } vs { priority: 3, isTarget: true },
    // true -> 현재 프로세스를 뒤로 보냄
    const hasHigherPriority = queue.some(
      process => process.priority > currentProcess.priority,
    );

    if (hasHigherPriority) {
      // 더 높은 우선순위가 있다면 현재 프로세스를 뒤로 보냄
      queue.push(currentProcess);
    } else {
      // 현재 프로세스가 가장 높은 우선순위라면 실행
      executionCount++;

      // 찾고있던 프로세스라면 결과 반환
      // 세 번째: { priority: 3, isTarget: true },
      if (currentProcess.isTarget) {
        return executionCount;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
