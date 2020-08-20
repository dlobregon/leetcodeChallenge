/**
 * Objetive: "reverse a singly simple list"
 * -->Input: 1->2->3->4->5->NULL
 * -->Output: 5->4->3->2->1->NULL
 * 
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 * -- Approach #1 - Recursively
 * -->Time complexity: O(n)
 * -->Space complexity: O(n)
 * 
 *  Algorithm:
 *  Start with node "curr" as head
 *  1- if "curr" is "null", return 
 *  2- if "curr"'s next element is null, this mean it is the last node, so make this as head because the last node will be the head
 *  of reversed list. 
 *  3- Revursively traverser the list. 
 *  4- Set curr->next->next to "curr"
 *  5- Set "curr"->next to "null"
 * 
 * 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


 /** The iteraive method **/


 let reverseList=(head)=>{
     let current=head
     if(!current){
         return current
     }
     /** Swaping the cursors **/
     let previous = head.next
     current.next= null
     while(previous){
         let tmp =   previous.next
         previous.next = current
         current = previous
         previous = tmp
     }
     return current
 }

 /**  the recursive function **/

 var reverseList = function(head) {
    if (!head) {
        return head;
    }
    let pre = head.next;
    head.next = null;
    return fun(head, pre);
    
    function fun(cur, pre) {
        if (pre == null) {
            return cur;
        }
        let tmp = pre.next;
        pre.next = cur;
        return fun(pre, tmp);
    }
}
