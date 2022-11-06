interface CounterResultProps {
    text: string,
    result: number
}

const CounterResult = (_props: CounterResultProps) => {
    const {text, result} = _props;

    return ( 
        <div className="counter-result">
            <p>{text}</p>
            <p>{result}</p>
        </div> 
    );
}
 
export default CounterResult;