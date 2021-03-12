import image from './assets/JS-logo2.png'
import {TitleBlock, ImageBlock, TextColumsBlock, TextBlock} from './classes/blocks'
import {css} from "./utils";

const text = `Cool videos and JavaScript tutorials here: <a href="https://youtube.com/c/VladilenMinin" target="_blank"> Vladilen Minin </a>. Here you will find comprehensive information on any aspect of the language, any framework, such as: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt and much more. Join us!`;

export const model = [
    new TitleBlock('Sites constructor on clean JavaScript', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #f759ab, #780650)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        })
    }),
    new ImageBlock(image, {
        alt: 'my image',
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        imageStyles: 'width: auto; height: 250px'
    }),
    new TextColumsBlock([
        'App on clean javascript, without use libraries.',
        'Learn how the principles of SOLID and OOP work in JavaScript in one course.',
        'JavaScript is simple, interesting. Learn to create any UI with your own hands.',
    ], {
        styles: 'padding: 2rem 0; color: #fff; background: linear-gradient(to bottom, #b37feb, #531dab); font-weight: bold;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #ffd666, #faad14);font-weight: bold;padding: 1rem;'
    })
]