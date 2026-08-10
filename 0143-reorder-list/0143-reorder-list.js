/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
        fast = fast.next;
    }

    let secHalf = slow.next;
    slow.next = null;

    let current = secHalf;
    let previous = null;

    while (current !== null) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    let firstpointer = head;
    let secondpointer = previous;

    while (secondpointer !== null) {
        let temp1 = firstpointer.next;
        let temp2 = secondpointer.next;

        firstpointer.next = secondpointer;
        secondpointer.next = temp1;

        firstpointer = temp1;
        secondpointer = temp2;
    }
};