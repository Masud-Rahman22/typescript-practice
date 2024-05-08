{
    function add(num1: number, num2: number) {
        return num1 + num2
    }
    add(2, 2)

    const addArrow = (num1: number = 10, num2: number): number => {
        return num1 + num2;
    }
    const numbers: number[] = [1, 2, 3, 4, 5]

    const squareNumbers: number[] = numbers.map((num: number): number => {
        return num * num;
    })
}
