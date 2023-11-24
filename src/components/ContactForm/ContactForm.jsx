import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i1j5g6t', 'template_i3bo7gv', form.current, 'RzFdYC78dJwKEr2lr').then(
      () => {
        toast('성공적으로 이메일이 전송되었습니다!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('이메일이 전송이 실패되었습니다.');
      }
    );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>답변 받으실 이메일</label>
        <input type="email" name="from_email" />
        <label>문의 제목</label>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요.(20자 이내)"
          maxLength={20}
          required
        />
        <label>문의 내용</label>
        <textarea name="message" placeholder="내용을 입력해주세요." required />
        <input type="submit" value="문의하기" />
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactForm;
