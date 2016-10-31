#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords
vec3  myColor;
void
main( )
{
	if (vST.s >=0.5) {
		myColor = vec3(1., 1., 0. );
	}
	else {
		myColor = vec3(1., 1., 1. );
	}
	gl_FragColor = vec4( myColor,  1. );
}
