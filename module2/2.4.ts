{
    // generic interface
    interface Developer<T, X = null> {
        name: string,
        age: number,
        smartWatch: T,
        bike?: X
    } // we can put default params value just like this null.

    type SmartWatch = {
        brand: 'Haylou',
        model: 'RS4 plus',
        display: 'super-amoled',
        refreshRate: '90hz'
    }

    type YamahaBike = {
        brand: string;
        model: string,
    }

    const poorDeveloper: Developer<SmartWatch> = {
        name: 'masud',
        age: 25,
        smartWatch: {
            brand: 'Haylou',
            model: 'RS4 plus',
            display: 'super-amoled',
            refreshRate: '90hz'
        }
    }

    const richDeveloper: Developer<SmartWatch, YamahaBike> = {
        name: 'masud',
        age: 25,
        smartWatch: {
            brand: 'Haylou',
            model: 'RS4 plus',
            display: 'super-amoled',
            refreshRate: '90hz'
        },
        bike: {
            brand: 'Yamaha',
            model: 'R15 version 3',
        }
    }
}