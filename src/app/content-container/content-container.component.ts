import {Component, OnInit} from '@angular/core';
import {GalleryComponent} from './gallery/gallery.component';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  header = 'Десять советов туристам или введение в заблуждение турагенств';
  article = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut accumsan diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae rutrum purus. Ut pellentesque lacinia ante eu convallis. In et mauris malesuada, suscipit nisl vitae, condimentum mi. Cras aliquam erat eget consectetur porta. Praesent in est velit. In elementum ante erat, non aliquet lorem lobortis at. Sed in ornare sapien. Fusce mattis dignissim lectus, nec lacinia nunc tempor sit amet. Nunc ac sollicitudin tellus.\n' +
    '\n' +
    'Aenean imperdiet nulla non ligula lacinia molestie. Praesent porta ex eget imperdiet commodo. Ut molestie aliquam velit sit amet pharetra. Nulla et enim quis purus ultrices imperdiet. Duis quis sapien non urna mattis vulputate. Proin convallis arcu id pulvinar gravida. Morbi interdum velit posuere ipsum sollicitudin ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In dictum quis nunc iaculis fringilla. Praesent iaculis venenatis sapien, nec ornare turpis. Vivamus laoreet neque ut nulla feugiat facilisis.\n' +
    '\n' +
    'Aenean non dolor arcu. Praesent interdum viverra massa vel molestie. Curabitur non volutpat urna. Sed fringilla erat eget tortor mollis, et finibus eros mattis. Proin ullamcorper, nulla nec sollicitudin mattis, nisi leo posuere augue, et convallis nibh nisi nec justo. Donec sed tristique tortor, et tempor purus. Proin in nisi eu augue pretium egestas id vitae sapien. Aliquam et dui sit amet risus tincidunt ultricies. Ut cursus ornare aliquam. Sed pretium ligula vitae nunc luctus sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras consectetur aliquet nulla, vitae venenatis mauris eleifend eget. Ut aliquam sem nec quam posuere tincidunt.';

  constructor() {
  }

  ngOnInit() {
  }

}
