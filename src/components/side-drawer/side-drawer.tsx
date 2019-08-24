import { Component, h } from '@stencil/core'

@Component({
    tag: 'my-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    render() {
        return (
            <aside>
                <h1>The Side Drawer</h1>
            </aside>
        )
    }
}