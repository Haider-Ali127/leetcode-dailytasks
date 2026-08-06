/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let Dummy = new ListNode(0)
    let tail = Dummy

    while(list1  !== null && list2  !== null ){
        if(list1.val <= list2.val){
            tail.next = list1
            tail = list1
            list1 =  tail.next
        }
        else{
            tail.next = list2
            tail = list2
            list2 =  tail.next 
        }
    }
    tail.next =  list1 || list2 
     
    return Dummy.next 
};