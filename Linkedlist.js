class Linkedlist{

    constructor(){
      this.head=null;
      }
    
    Node (val){ 
        return {
        value:val,
        next:null
        }
    }
    
    add (val){
    let newNode=this.Node(val);
    let temp=this.head;
    
    if(!temp){
    
      this.head=newNode;
    }else{
     
     
    while(temp.next){
      temp=temp.next;
    
    }
    temp.next=newNode;
    }
    }
    
    remove(val){
      let temp=this.head;
    if(val==temp.val){
     this.head=temp.next;
    return;
    }else{
      let pre=temp;
      temp=temp.next;
     while(temp){
       if(val==temp.value){
        
         pre.next=temp.next;
         
         return;
       }
      temp=temp.next;
    
    }
    
    }
    }
    
    print(){
     
      let temp=this.head;
      let result='Linkedlist {';
     while(temp.next)
     {
       result+=temp.value+',';
      temp=temp.next;
    }
    result+=temp.value+'}';
    console.log(result);
    }
    }
    
    
    let linkedlist= new Linkedlist();
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.print(); //Expected Result: LinkedList{1,2,3};
    linkedlist.remove(2);
    console.log('after 2 removed');
    linkedlist.print(); //Expected Result: LinkedList{1,3};
    
    
    