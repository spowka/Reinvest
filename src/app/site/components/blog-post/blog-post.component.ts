import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { replaceMetaTagIfNotEmpty } from 'src/app/admin/shared/helpers/meta-helper';
import { BlogPostsService } from 'src/app/admin/shared/blog-posts/blog-posts.service';
import { BlogPostModel, BlogPostViewModel } from 'src/app/admin/shared/blog-posts/blog-posts.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {
  isLoading: false;
  blogPost: BlogPostViewModel;
  blogPostItem:BlogPostModel; 
  comment: string;

  news = [1, 2, 3, 4, 5, 6];
  comments = []
  hasPhoto = true;
  answer = true;

  constructor(
    activateRoute: ActivatedRoute,
    private blogPostsService: BlogPostsService,
    private titleService: Title,
    private meta: Meta
  ) {
    activateRoute.params.subscribe(params => {
      params.post && this.loadPost(params.post);
    });
  }

  ngOnInit() {
    this.comments = [
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'comment'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'answer'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'answer'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'comment'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'answer'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'comment'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'answer'},
      {name: 'Святослав Белов', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl risus turpis.', photo: '../../../../assets/images/person.jpg', type: 'answer'},
    ]
  }

  loadPost(post: string) {
    this.blogPostsService.getContent(post).subscribe(
      response => {
        this.blogPost = response;        
        this.isLoading = false;

        response.titleTag && this.titleService.setTitle(response.titleTag);
        replaceMetaTagIfNotEmpty(this.meta, 'keywords', response.keywordsTag);
        replaceMetaTagIfNotEmpty(this.meta, 'description', response.descriptionTag);
      },
      error => {
        this.isLoading = false;
        this.blogPost = {
          title: '',
          content: 'Ошибка загрузки страницы',
          descriptionTag: '',
          keywordsTag: '',
          titleTag: '',
          createDate: '',
          image: '',
          tags: null
        };
      }
    );
  }

  getPost() {
    // this.blogPostsService.getContent(post).subscribe(
    //   response => {
    //     this.blogPost = response;
        
    //     this.isLoading = false;

    //     response.titleTag && this.titleService.setTitle(response.titleTag);
    //     replaceMetaTagIfNotEmpty(this.meta, 'keywords', response.keywordsTag);
    //     replaceMetaTagIfNotEmpty(this.meta, 'description', response.descriptionTag);
    //   },
    //   error => {
    //     this.isLoading = false;
    //     this.blogPost = {
    //       title: '',
    //       content: 'Ошибка загрузки страницы',
    //       descriptionTag: '',
    //       keywordsTag: '',
    //       titleTag: '',
    //       createDate: '',
    //       image: '',
    //       tags: null
    //     };
    //   }
    // );
  }


  gotoPost(post) {

  }
}
