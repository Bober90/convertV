const RETES={
    usd:40,
    eur:42
};

function convert({ua,currency}){
    if(!RETES[currency]){
        return null;
    }
    return ua*RETES[currency];
}