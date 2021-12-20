const linksWidth = [ 34 , 53 , 51 , 44 ];

const leftFunction = ( hoverIndex ) => {
	let sum = 0 ;
	for ( let i=0 ; i < hoverIndex ; i++ ) {
		sum += linksWidth[i];
	}
  sum+= linksWidth[hoverIndex] / 2 ;
  sum+= hoverIndex * 25 ;
};
