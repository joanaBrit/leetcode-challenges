# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        if not headA or not headB:
            return None

        pointerA, pointerB = headA, headB

        while pointerA != pointerB:
            pointerA = pointerA.next if pointerA else headB
            pointerB = pointerB.next if pointerB else headA
        return pointerA
        
        
        # If there's no intersection in the 2 lists return null
        # Finding the intersection of two lists, is finding the same elements between them
        # Think of two pointers
        # Initialize two pointers, one for each linked list
        # Iterating until the two pointers meet or both reach the end
        # If pointerA reaches the end, redirect it to the head of list B, Otherwise, move to the next node (same for the pointerB)
        # Return either the intersection node or None if the two lists do not intersect