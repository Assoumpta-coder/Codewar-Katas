​
function movie(card, ticket, perc) {
    let n = 0;
    let costA = 0; 
    let costB = card; 
    let lastTicketPriceB = ticket; 
    while (Math.ceil(costB) >= costA) {
        n++; 
        costA = ticket * n;
        lastTicketPriceB = lastTicketPriceB * perc;
        costB = costB + lastTicketPriceB;
    }
    return n;
}
​