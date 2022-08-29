const pi = 3.14159;
  
function volume( r)
{
    let vol;
    vol = ((4) / (3)) * pi * r * r * r;
    return vol;
}
  

function surface_area( r)
{
    let sur_ar;
    sur_ar = 4 * pi * r * r;
    return sur_ar;
}
  

  
    let radius = 12;
    let vol, sur_area;
      

    vol = volume(radius).toFixed(2);
    sur_area = surface_area(radius).toFixed(2);
  
    
    // console.log( "Volume Of Sphere :" + vol +"<br/>");
    console.log( "Surface Area Of Sphere :" + sur_area )
	