
let basicData ={
    header:{},
    main:{},
    footer:{}
}

let fromJsonData ={
    header:{
        content:"header 부분입니다.",
        style:{
            width:"100vw",
            height:"100px",
            backgroundColor:"#ccc"
        }
    },
    main:{
        content:"main 부분입니다",
        style:{
            width:"100vw",
            height:"100px",
            backgroundColor:"#333"
        }
    },
    footer:{
        content:"footer 부분입니다.",
        style:{
            width:"100vw",
            height:"100px",
            backgroundColor:"#666"
        }
    }
}
function exampleOne(basicData, fromJsonData){
    let value ="";
    value=JSON.parse(JSON.stringify(fromJsonData));
    basicData.header=value.header;
    basicData.main=value.main;
    basicData.footer=value.footer;
    value=basicData

    let innerHTML = `
    <div style='${value.header.style}'>${value.header.content}</div>
    <div style='${value.main.style}'>${value.main.content}</div>
    <div style='${value.footer.style}'>${value.footer.content}</div>
    `
    return innerHTML
}


class exampleTwo {
    constructor(width,height,backColor){
        this.width=width
        this.height=height
        this.backColor=backColor
    }
    get returnObject(){
        let obj={
                header:{
                  content:"header 부분입니다.",
                  style:{
                   width:this._width,
                   height:this._height,
                   backgroundColor:this._backColor
                 }
               },
                main:{
                 content:"main 부분입니다",
                 style:{
                     width:this._width,
                       height:this._height,
                        backgroundColor:this._backColor
                 }
              },
                footer:{
                    content:"footer 부분입니다.",
                    style:{
                        width:this._width,
                        height:this._height,
                        backgroundColor:this._backColor
                    }
                }
            }
            return obj;
        }

    set width(value){
        if(typeof value!=="string"){
            console.log("문자열만 입력하세요")
        }
        else
        this._width = value;
    }
    set height(value){
        if(typeof value!=="string"){
            console.log("문자열만 입력하세요")
        }
        else
        this._height = value;
    }
    set backColor(value){
        if(typeof value!=="string"){
            console.log("문자열만 입력하세요")
        }
        else
        this._backColor = value;
    }
}

const a = new exampleTwo("1","2","3");

console.log(a.returnObject)

/*소요시간 1시간 40분 . 문제를 이해하는데 시간이 좀 오래 걸렸습니다.*/