class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }

  static sanitize(string){
  	return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
   static titleize(string){
   	let noCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   	let result = []
   	let new_string = string.split(' ');

   	for(let i = 0; i < new_string.length; i++){
   		if (i === 0) {
   		 result.push(this.capitalize(new_string[i]));
   		} 

   		else {
   			if (noCaps.includes(new_string[i])) {
   				result.push(new_string[i])
   			}
   			else {
   				result.push(this.capitalize(new_string[i]));
   			}
   		}
   	}
   	return result.join(" ");
  }

}
