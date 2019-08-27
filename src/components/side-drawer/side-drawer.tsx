import { Component, h, Prop, State } from '@stencil/core'

@Component({
    tag: 'my-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @State() showContentInfo = false
    @Prop({reflectToAttr: true}) title: string
    @Prop({ reflectToAttr: true, mutable: true }) open: boolean

    onCloseDrawer() {
        this.open = false
    }

    onContentChange(content: string) {
        this.showContentInfo = content === 'contact'
    }

    render() {
        let mainContent = <slot />
        if (this.showContentInfo) {
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>You can reach us via phone or email.</p>
                    <ul>
                        <li>Phone: 777666555</li>
                        <li>
                            Email: 
                            <a href="mailto:something@something.com">something@something.com</a>
                        </li>
                    </ul>
                </div>
            )
        }
        return (
            <aside>
                <header>
                    <h1>{ this.title }</h1>
                    <button onClick={ this.onCloseDrawer.bind(this) }>X</button>
                </header>
                <section id="tabs">
                    <button 
                    class={ !this.showContentInfo ? 'active' : '' } 
                    onClick={ this.onContentChange.bind(this, 'nav') }>
                        Navigation
                    </button>
                    <button 
                    class={ this.showContentInfo ? 'active' : '' } 
                    onClick={ this.onContentChange.bind(this, 'contact') }>
                        Contact
                    </button>
                </section>
                <main>
                    { mainContent }
                </main>
            </aside>
        )
    }
}