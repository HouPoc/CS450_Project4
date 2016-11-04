#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
uniform	bool	uParttern_FRG;
in vec2  	vST;		// texture coords
in vec4		vColor;		// object color
vec4  myColor;
void
main( )
{
	if (vST.s >=0.35 && vST.s <=0.65 && vST.t >= 0.35 && vST.t <=vST.s) {
		myColor =vec4 (uTime, .5, uTime, 1.);
	}
	else {
		myColor = vColor;
	}
	gl_FragColor = myColor;
}
