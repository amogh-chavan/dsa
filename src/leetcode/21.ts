class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  //empty merged list created
  const merged_list = new ListNode();
  let current_merged_list_pointer = merged_list;

  let current_list_1 = list1;
  let current_list_2 = list2;

  //compare and add to merged list
  while (current_list_1 && current_list_2) {
    if (current_list_1.val < current_list_2.val) {
      current_merged_list_pointer.next = current_list_1;
      current_list_1 = current_list_1.next;
      current_merged_list_pointer = current_merged_list_pointer.next;
    } else {
      current_merged_list_pointer.next = current_list_2;
      current_list_2 = current_list_2.next;
      current_merged_list_pointer = current_merged_list_pointer.next;
    }
  }

  //add reaming elements

  if (current_list_1) {
    current_merged_list_pointer.next = current_list_1;
  }

  if (current_list_2) {
    current_merged_list_pointer.next = current_list_2;
  }

  return merged_list.next;
}
