/*
 * Implement all your JavaScript in this file!
 */
var set1="";
var set2="";
var group="";
var operator="";
var result="";
var countOfOperator=0;
var count=0;
var input="";
var operation=0;

   $('button').on('click',function(e){

     input=this.innerHTML;
         if(input =="C"){
                 reset();
                 $('#display').val("");
                 }

          else if(isNaN(input)){

                      //console.log("its a non number:"+result + "count"+count);
                            if( input =="="){
                                        //console.log("inside = operator & count:"+count);
                                         if(count==0 && set1==""){
                                            reset();
                                            }
                                            else if(set1!="" && operator==1){
                                              result=set1+operator;
                                              $("#display").val(result);
                                            }
                                          else if(count==0 && set1!="" && operator==0) {
                                                    //console.log("gwithset1: "+set1);
                                                    result=set1;
                                                    $("#display").val(result);
                                                  }
                                            else if(count==1 && operation==0 && set2!=""){

                                              operation=1;
                                              group=set1+operator+set2;
                                              console.log("result:"+group);
                                              result=eval(group);
                                              $("#display").val(result);
                                              return result;
                                            }
                                            else if(count>1 && operation>=1)
                                                  {
                                                  console.log("second operation");
                                                  group=result+operator+set2;
                                                 console.log("groupwithset2: "+group);
                                                  result=eval(group);
                                                  $("#display").val(result);
                                                  }
                                               else{

                                                    group=result+operator+set2;
                                                    result=eval(group);
                                                    console.log("if count>1 and operator>1"+result);
                                                    $("#display").val(result);
                                                 }
                                                }



                    else if(input!="=" && count==0 && set1==""){
                            console.log("new rule");
                            $("#display").val("");
                          }
                    else if(input!="=" && count==0 && set1!="" ){
                      console.log("set1with value"+result);
                      count=count+1;
                      group=set1;
                      findOperator(input);
                      console.log("operator "+operator);

                        }
                    else if(input!="="&& count==1 && set2!=""){
                      group=set1+operator+set2;
                      result=eval(group);
                      $("#display").val(result);
                      set2="";
                      count=count+1;
                      operation=operation+1;
                      console.log("set1with value"+result);
                      findOperator(input);
                      console.log("operator "+operator);


                    }
                    else if(input!="="&& count>=1 && set2==""){
                      console.log("result for second"+result);
                      operator=input;
                      group=result+operator;
                      result=eval(group);
                      $("#display").val(result);
                      set2="";
                      console.log("set1with value"+result);
                      findOperator(input);
                      console.log("operator "+operator);

                    }

                      else if(input!="=" && count>1){
                          group=result+operator+set2;
                          result=eval(group);
                          console.log("groupwithset2: "+result);
                          $("#display").val(result);

                          count+=1;
                        console.log("count after 2nd operator: "+count);
                        console.log("result after 2 nd operator: "+result);

                          if(input!="+" && input!="-" && input!="*"){
                               operator="/";
                               set2="";
                               }
                         else {
                               operator=input;
                               set2="";
                             }
                             $("#display").val(result);
                          }
                        }

                  else {fornumber()};

 });


function fornumber(){
        console.log("count before set1"+count);
        if(count==0){
         set1=set1+input;
         console.log("set1: "+set1);
         $('#display').val(set1);

          }
         else {
           console.log("count before set2: "+count+"group: "+group);
           if(count>0){
                       set2=set2+input;
                       console.log("set2 "+set2);
                       $('#display').val(set2);
                     }
                }
}



      function reset(){
        set1="";
        set2="";
        group="";
        operator="";
        result="";
        count=0;
        countOfOperator=0;
        input="";
        operation=0;
      }

      function findOperator(){
        switch(input){
          case "+":
          operator="+";
          break;
          case "-":
          operator="-";
          break;
          case"*":
          operator="*";
          break;y
          default:
          operator="/"
        }
      }
