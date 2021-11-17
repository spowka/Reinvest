import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextPagesService } from 'src/app/admin/shared/text-pages/text-pages.service';
import { Title, Meta } from '@angular/platform-browser';
import { BlogPostsService } from 'src/app/admin/shared/blog-posts/blog-posts.service';
import { BlogPostSiteBriefModel } from 'src/app/admin/shared/blog-posts/blog-posts.model';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogFeedComponent implements OnInit {
  isLoading: boolean = false;
  posts: BlogPostSiteBriefModel[][] = [[]];
  nextPost: number | undefined;
  year: number;
  nextYear: number;

  constructor(
    activateRoute: ActivatedRoute,
    private blogPostsService: BlogPostsService,
    private titleService: Title,
    private meta: Meta,
    private router: Router,
  ) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.load();
  }

  get currentPosts(): BlogPostSiteBriefModel[] {
    return this.posts[this.posts.length - 1];
  }

  load() {
    this.isLoading = true;
    this.blogPostsService.getFeed(this.year).subscribe(
      response => {
        response.rows.forEach(row => this.currentPosts.push(row));
        this.nextPost = response.nextPosition;
        this.nextYear = response.nextYear;
        this.isLoading = false;
      },
      error => {
        this.posts = [];
        this.isLoading = false;
      }
    );
  }

  loadMore() {
    this.isLoading = true;
    this.blogPostsService.getFeed(this.year, this.nextPost).subscribe(
      response => {
        response.rows.forEach(row => this.currentPosts.push(row));
        this.nextPost = response.nextPosition;
        this.nextYear = response.nextYear;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  gotoPost(post: BlogPostSiteBriefModel) {
    this.router.navigate([`/blog/${post.logicalName}`]);
  }

  onScroll() {
    this.nextPost && this.loadMore();
  }

  gotoNextYear() {
    this.year = this.nextYear;
    this.nextYear = null;
    this.posts.push([]);
    this.load();
  }
}
