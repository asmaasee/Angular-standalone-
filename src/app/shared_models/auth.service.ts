// src/app/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  async register(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      await sendEmailVerification(result.user);
      alert('تم إنشاء الحساب بنجاح. يرجى تأكيد البريد الإلكتروني.');
      this.router.navigate(['/login']);
    } catch (error) {
      alert(`خطأ في التسجيل: ${(error as any).message}`);
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      if (!result.user.emailVerified) {
        alert('يرجى تأكيد البريد الإلكتروني أولاً.');
        await this.logout();
        return;
      }
      alert('تم تسجيل الدخول بنجاح.');
      this.router.navigate(['/overview']);
    } catch (error) {
      alert(`خطأ في تسجيل الدخول: ${(error as any).message}`);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      alert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك.');
    } catch (error) {
      alert(`خطأ: ${(error as any).message}`);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      alert(`مرحبًا ${result.user.displayName}`);
      this.router.navigate(['/overview']);
    } catch (error) {
      alert(`خطأ في تسجيل الدخول بجوجل: ${(error as any).message}`);
    }
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
