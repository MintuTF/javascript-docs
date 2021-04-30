
let linkedlist ={
   head:null,
   Node: function(val) {
    return {
        value: val,
        nextNode: null
    };
},
   add:function (val) {
    let newNode=this.Node(val);  
     
let tempNode=this.head;
  if(tempNode===null){
    this.head=newNode;
  } 
  else{
      while(tempNode.nextNode!==null){
    tempNode=tempNode.nextNode;
   
}
tempNode.nextNode=newNode;
}
  

  
},
remove:function (val) {

    let tempNode=this.head;
    if(tempNode.value == val) {
        this.head = this.head.newNode;
        return;
    } else
    {
      let pre=tempNode;
        while(tempNode.nextNode!==null){
            if(tempNode.value == val){
               pre.nextNode=tempNode.nextNode;
               break;
            }
            pre=tempNode;
            tempNode=tempNode.nextNode;
          
          
           
        }

    }
},

   
print:function () {
    let tempNode=this.head;
    while(tempNode!==null){
 console.log(tempNode.value);
 tempNode=tempNode.nextNode;
    }
 }

}


linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
 linkedlist.remove(2);
console.log('after 2 removed');
linkedlist.print(); //Expected Result: LinkedList{1,3};
