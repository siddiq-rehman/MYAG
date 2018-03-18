


Array.prototype.myReplace=function(ar){
	this.forEach((data,i)=>{		
		ar.forEach((data1,j)=>{
			if(data.label===data1.label){
				if(data.lat !== data1.lat ||  data.lng !== data1.lng){
					this[i]=arr2[j]	
				}
			}
		})
	})
}

Array.prototype.objIndexOf=function(key,value){
	let exist=0
	this.forEach((data)=>{
		if(data[key]==value){
			exist= 1
		}
	})
return exist;	
}
