/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 *
 * 示例 1：
 *
 * 输入：m = 3, n = 7
 * 输出：28
 * 示例 2：
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 * 示例 3：
 *
 * 输入：m = 7, n = 3
 * 输出：28
 * 示例 4：
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 * 提示：
 *
 * 1 <= m, n <= 100
 * 题目数据保证答案小于等于 2 * 109
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/unique-paths
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 采用动态规划，由于机器人只能向左或向下移动
 * n\m  0  1  2  3  4  5  6
 *  0   1  1  1  1  1  1  1
 *  1   1  2  3  4  5  6  7
 *  2   1  3  6  10 15 21 28
 *
 * arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
 */

function uniquePaths(m, n) {
  let arr = new Array(m);
  arr[0] = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        arr[i] = [1];
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  return arr[m - 1][n - 1];
}
