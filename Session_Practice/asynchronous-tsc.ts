{
    // asynchronous typescript
    interface IData {
        name: string;
        age: number;
        address: string;
    }

    const data : IData = {
        name: 'masud',
        age:25,
        address: 'narayanganj'
    }

    const showMessage = () : Promise<IData> =>{
        return new Promise<IData>((resolve, reject) =>{
            if(data){
                return resolve(data)
            }
            reject('no data found')
        })
    }

    const toShowMessage = async()=>{
        const result = await showMessage()
        console.log(result)
    }

    toShowMessage()
}