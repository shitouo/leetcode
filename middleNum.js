// 寻找两个正序数组的中位数
// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))
function getMiddleNum(nums1 = [], nums2 = []) {
    const totalLength = nums1.length + nums2.length;
    const searchNum = Math.ceil(totalLength / 2);
    if (totalLength & 1) {
        return search(searchNum, nums1, nums2);
    } else {
        searchNum2 = searchNum + 1;
        return (search(searchNum, nums1, nums2) + search(searchNum2, nums1, nums2)) / 2;
    }
}
// 寻找两个数组中的第seatchNum（不是索引哦）个数
function search(searchNum, nums1 = [], nums2 = []) {
    if (searchNum === 1) {
        return Math.min(nums1[0], nums2[0]);
    }
    if (nums1.length === 0) {
        return nums2[searchNum - 1];
    } else if (nums2.length === 0) {
        return nums1[searchNum - 1];
    }
    let dividIndex = Math.floor(searchNum / 2) - 1;
    let dividIndexOfNums1 = dividIndex > nums1.length - 1 ? nums1.length - 1 : dividIndex;
    let dividIndexOfNums2 = dividIndex > nums2.length - 1 ? nums2.length - 1 : dividIndex;
    if (nums1[dividIndexOfNums1] < nums2[dividIndexOfNums2]) {
        return search(searchNum - dividIndexOfNums1 - 1, nums1.slice(dividIndexOfNums1 + 1), nums2);
    } else {
        return search(searchNum - dividIndexOfNums2 - 1, nums1, nums2.slice(dividIndexOfNums2 + 1));
    }
}