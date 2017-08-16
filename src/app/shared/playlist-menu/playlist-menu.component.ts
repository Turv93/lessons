import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-playlist-menu',
    templateUrl: './playlist-menu.component.html',
    styleUrls: ['./playlist-menu.component.css']
})
export class PlaylistMenuComponent implements OnInit {

    testValue = 'test';
    lists = [
        {
            id: '1',
            name: '123',
            description: 'lorem ipsu1m'
        },
        {
            id: '2',
            name: '1213',
            description: 'lorem ips12um'
        },
        {
            id: '3',
            name: '1233',
            description: 'lorem ips123um'
        },
        {
            id: '4',
            name: '11123',
            description: 'lorem ip123123sum'
        },
        {
            id: '5',
            name: '1111123',
            description: 'lorem ipsum'
        },
        {
            id: '6',
            name: '123',
            description: 'lorem ipsum'
        },
        {
            id: '7',
            name: '123',
            description: 'lorem ipsum'
        },
        {
            id: '8',
            name: '123',
            description: 'lorem ipsum'
        },
        {
            id: '9',
            name: '123',
            description: 'lorem ipsum'
        },
        {
            id: '10',
            name: '123',
            description: 'lorem ipsum'
        },
    ]

    constructor() { }

    ngOnInit() {
    }

}
