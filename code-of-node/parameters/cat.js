


function cat(b,data_json){

    var a=data_json.filter((val)=>{

        return  val.category==b

      })

      return a;

}

module.exports=cat;