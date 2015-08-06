import java.io.UnsupportedEncodingException;

/*
UTF-8 Table - for reference

http://en.wikipedia.org/wiki/UTF-8

Bits of code point  First code point  Last code point     Byte 1   Byte 2   Byte 3   Byte 4   Byte 5   Byte 6

7           U+0000        U+007F        0xxxxxxx
11          U+0080        U+07FF        110xxxxx 10xxxxxx
16          U+0800        U+FFFF        1110xxxx 10xxxxxx 10xxxxxx
21          U+10000       U+1FFFFF      11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
26          U+200000      U+3FFFFFF     111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
31          U+4000000     U+7FFFFFFF    1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

*/

public class utf8_todo {
  static void reverseBytes(byte[] bytes, int startingOffset, int len) {
  
    for (int i = startingOffset; i < len ; i++) {
        
        byte b = bytes[len - i];

    }

  }

  static void reverseUTF8Bytes(byte[] bytes) {
      for (int i = 0; i < bytes.length ; i++) {


          switch(bytes[i]) {
            case : bytes[i] & 0x40 == 0;
              // log error
              break;
              case : bytes[i] & C0 == 0;
                reverseBytes(bytes, i, 2)
              break;
          } 
      }
  }


  public static void main(String args[]) throws UnsupportedEncodingException {
    String testString = "Oscar Ⓐ Ⓒ Ⓔ / Ⓑ Ⓓ Ⓕ Ⓜ ☂";

    // Convert the string to bytes
    byte[] bytes = testString.getBytes("UTF-8");

    reverseUTF8Bytes(bytes);

    // Convert the bytes back into a string
    testString = new String(bytes, "UTF-8");
    System.out.println(testString);
  }
}
