# Katia Zakharina

## Contacts

**Location:** Minsk, Belarus  
**Phone:** +375 (29) 165 87 83  
**E-mail:** katia.zakharina@gmail.com  
**GitHub:** [KatiaZakharina](https://github.com/KatiaZakharina)  
**️Telegram:** [@katia_zakharina](https://t.me/katia_zakharina)

---

## Summary

I am a second-year student of BSU and my specialty is related to web development.  
I really like what I do, I enjoy creating websites and would like to do it better. I like to develop in this direction. That is why I am currently attending RS school courses and I hope that it will help me improve my skills.  
I believe that my patience, rationality and diligence will help me in this. I'm focused, attentive to details, and like finding creative solutions. I also participated in group projects at the university, so I consider myself a good team worker.  
My goal is to gain experience working on real projects to become an skilled web developer.

---

## Skills

- HTML & CSS
- JavaScript
- C++ basic
- Git & GitHub
- BEM
- Figma
- Tools for teamwork: Trello, Slack

---

## Code Examples

> **RGB To Hex Conversion**  
> _Passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value._

```JavaScript
function rgb(r, g, b){
  let arr=[r, g, b];

  let newarr=arr.map(i=>{
    return i>=255?'FF':
           i<=0?'00':
           i<=16?'0'+i.toString(16):i.toString(16);
  });

    return (newarr.reduce((sum, current) => `${sum}${current}`)).toUpperCase();
}
```

---

## Education

- **Belarusian State University**</br>
  _Specialty: Mathematics and Information Technologies_  
  _Direction: Web-Programming and Internet Technologies_

- **Courses:**
  - Udemy [JavaScript courses](https://www.udemy.com/course/javascript_full/)
  - Glo Academy video courses
  - JavaScript Manual on [learn.javascript.ru](https://learn.javascript.ru/)
  - RS School Course "JavaScript/Front-end" (in progress)

---

## Languages

- Russian - Native
- English - A2+
