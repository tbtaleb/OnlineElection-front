import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-admin-list-users',
  standalone: true,
  imports: [DialogModule,TableModule,ToastModule],
  templateUrl: './admin-list-users.component.html',
  styleUrl: './admin-list-users.component.css'
})
export class AdminListUsersComponent {
  loading: boolean = true;
  showDialogue: boolean= false;
  searchValue: string | undefined;
  filteredUsers: any[] = [];
  users = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "password123", // For real applications, never store plain passwords!
      role: "user",
      favorites: ["64d3b0f7c71c3a0012345678", "64d3b0f7c71c3a0012345679"], // Candidate ObjectIds
      age: 28,
      bio: "A passionate environmentalist and community organizer.",
      profilePicture: "https://example.com/images/alice.jpg",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "securePass456",
      role: "admin",
      favorites: [],
      age: 35,
      bio: "Administrator overseeing platform management and content.",
      profilePicture: "https://example.com/images/bob.jpg",
    },
    {
      name: "Charlie Green",
      email: "charlie.green@example.com",
      password: "charliePass789",
      role: "user",
      favorites: ["64d3b0f7c71c3a0012345680"],
      age: 22,
      bio: "Student and aspiring politician.",
      profilePicture: "https://example.com/images/charlie.jpg",
    },
    {
      name: "Dana White",
      email: "dana.white@example.com",
      password: "DanaSecure123",
      role: "user",
      favorites: [],
      age: 40,
      bio: null, // Optional
      profilePicture: null, // Optional
    },
    {
      name: "Eve Black",
      email: "eve.black@example.com",
      password: "EvePass321",
      role: "admin",
      favorites: ["64d3b0f7c71c3a0012345681", "64d3b0f7c71c3a0012345682"],
      age: 30,
      bio: "Managing election campaigns and user relations.",
      profilePicture: "https://example.com/images/eve.jpg",
    },
  ];
  ngOnInit() {
    this.loading = false
    this.filteredUsers = this.users
  }
  onSearchChange(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    if (input === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(
        (data) =>
          (data.name ? data.name.toLowerCase().includes(input) : false) ||
        (data.email ? data.email.toLowerCase().includes(input) : false) 
      );
    }
  }
  
  showIt(user:any){
    this.showDialogue = !this.showDialogue;
    //this.user=user
  }
  cancelSup() {
    this.showDialogue = !this.showDialogue;
  }
  deleteUser() {
    //delete method
  }
  editUser(_t30: any) {
    throw new Error('Method not implemented.');
  }
}
