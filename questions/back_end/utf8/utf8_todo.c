#include <stdio.h>

/*
UTF-8 Table - for reference

http://en.wikipedia.org/wiki/UTF-8

Bits of code point 	First code point 	Last code point     Byte 1 	 Byte 2   Byte 3   Byte 4   Byte 5 	 Byte 6

7 					U+0000 				U+007F 				0xxxxxxx
11 					U+0080 				U+07FF 				110xxxxx 10xxxxxx
16 					U+0800 				U+FFFF 				1110xxxx 10xxxxxx 10xxxxxx
21 					U+10000 			U+1FFFFF 			11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
26 					U+200000 			U+3FFFFFF 			111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
31 					U+4000000 			U+7FFFFFFF 			1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

*/

void reverse_string(char * str, int len) {

}

void reverse_utf8_string(char* str, int len) {

}


int main(){

	char directions[] = "Oscar Ⓐ Ⓒ Ⓔ / Ⓑ Ⓓ Ⓕ Ⓜ ☂";
	char * counter = &directions[0];

	int len = 0;

	// What is going on here?? Hint: Continuation Bytes?
	while (*counter) len += (*counter++ & 0xc0) != 0x80;

	printf("Array Size: %lu\n", sizeof(directions) - 1);
	printf("Characters: %d\n", len);

	printf("%s \n", directions);
	reverse_utf8_string(directions, sizeof(directions) - 1);
	printf("%s \n", directions);

	return 0;
}
