import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostSiteBriefModel } from 'src/app/admin/shared/blog-posts/blog-posts.model';

@Component({
  selector: 'rv-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent implements OnInit {
  @Input() cardList: any[];
  @Input() cardsTitle: string;
  @Input() showMoreTitle: string;
  @Input() cardQuantity: number;
  @Output() handleShowMore = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  gotoPost(post: BlogPostSiteBriefModel) {
    this.router.navigate([`/blog/${post.logicalName}`]);
  }

}
