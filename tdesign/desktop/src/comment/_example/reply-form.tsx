import { h, tag, WeElement, Ref, render, createRef } from 'omi'
import '../../button'
import '../../notification'
import '../../space'
import '../../textarea'

import '../index'
import { log } from 'console'

@tag('comment-reply-form')

export default class BasicComment extends WeElement {
    static css = 't-comment{}'
    myTextInfo: HTMLElement
    replyData = '回复功能待完善'

    submitReply = () => {
        this.replyData = this.myTextInfo.value;
        alert(this.replyData)
    }


    replyForm = (
        <t-space direction="vertical" align="end" style={{ width: '100%' }}>
            <textarea ref={e => { this.myTextInfo = e }} cols="30" rows="10" style={{ width: 500, height: 50 }} placeholder='请输入回复内容'></textarea>
            <t-button style={{ float: 'right' }} onClick={this.submitReply} theme='primary'>回复</t-button>
        </t-space>
    );



    render() {
        return <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" content={this.replyForm} />;
    }
}
