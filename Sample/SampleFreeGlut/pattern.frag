#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords
vec3  myColor;
void
main( )
{
	if (vST.s >=0.35 && vST.s <=0.65 && vST.t >=0.35 && vST.t <=0.65) {
		myColor = vec3(1., 1., 0. );
	}
	else {
		myColor = vec3(.45, .45, .45 );
	}
	gl_FragColor = vec4( myColor,  1. );
}
