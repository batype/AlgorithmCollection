/**
 * 376.摆动序列
 * @type 贪心算法
 *
 * 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。
 * 第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
 *
 *    例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。
 *
 *    相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
 * 子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。
 *
 * 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。
 *
 * 示例 1：
 * 输入：nums = [1,7,4,9,2,5]
 * 输出：6
 * 解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。
 *
 * 示例 2：
 * 输入：nums = [1,17,5,10,13,15,10,5,16,8]
 * 输出：7
 * 解释：这个序列包含几个长度为 7 摆动序列。
 * 其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。
 *
 * 示例 3：
 * 输入：nums = [1,2,3,4,5,6,7,8,9]
 * 输出：2
 *
 * 提示：
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 *
 */
/**
 * 1.标准的
 * [1, 7, 4, 9, 2, 5]
 *    6 -3  5  -7 3
 * 2. 首位元素
 *                [1, 2]
 * 初始prediff = 0   1
 * 3. 上下坡有平坡
 * [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
 *    16 -12 5   3   2   -5 -5  11  8
 * 4.单调坡有平坡
 * [1, 2, 2, 3, 4]
 *    1  0  1  1
 * 前后坡比较prediff >= 0 curdiff < 0 || prediff <= 0 && curdiff > 0
 * 赋值只取第一次变化的值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length === 1) return 1;
  let preDiff = 0,
    curDiff = 0;
  let result = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];
    if ((preDiff >= 0 && curDiff < 0) || (preDiff <= 0 && curDiff > 0)) {
      result++;
      preDiff = curDiff;
    }
  }
  return result;
};

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 2, 3, 4]));
