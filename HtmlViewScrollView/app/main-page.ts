import { EventData } from 'data/observable';
import { Page } from 'ui/page';

export function viewLoaded(args) {
    args.object.bindingContext = { 
        html: `
        <span style='font-family:"Futura-Medium"; line-height:0.8; color:#212121;'>
        <h1> See no Label above? It's collapsed completele! </h1>

        <h2 id="where-to-get-help"><a href="#where-to-get-help">Where to get help</a></h2>
        <p>The NativeScript framework has a vibrant community that’s here to help when you run into problems.</p>
        <p>If you hit an issue, start by seeing if anyone else has reported the problem on <a href="http://forum.nativescript.org/">the NativeScript community forum</a>. If you can’t find any information, try creating a new forum topic with any details needed to recreate the issue.</p>
        <p>If you’ve found an issue with the NativeScript framework itself, please report the problem in the appropriate GitHub repository.</p>
        <h2 id="where-to-get-help"><a href="#where-to-get-help">Where to get help</a></h2>
        <p>The NativeScript framework has a vibrant community that’s here to help when you run into problems.</p>
        <p>If you hit an issue, start by seeing if anyone else has reported the problem on <a href="http://forum.nativescript.org/">the NativeScript community forum</a>. If you can’t find any information, try creating a new forum topic with any details needed to recreate the issue.</p>
        <p>If you’ve found an issue with the NativeScript framework itself, please report the problem in the appropriate GitHub repository.</p>
        <h2 id="where-to-get-help"><a href="#where-to-get-help">Where to get help</a></h2>
        <p>The NativeScript framework has a vibrant community that’s here to help when you run into problems.</p>
        <p>If you hit an issue, start by seeing if anyone else has reported the problem on <a href="http://forum.nativescript.org/">the NativeScript community forum</a>. If you can’t find any information, try creating a new forum topic with any details needed to recreate the issue.</p>
        <p>If you’ve found an issue with the NativeScript framework itself, please report the problem in the appropriate GitHub repository.</p>
        </span>
        `
    }
}