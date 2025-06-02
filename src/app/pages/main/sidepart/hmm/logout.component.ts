import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../shared_models/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  view: 'login' | 'signup' = 'signup';

  fullName = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';
  passwordStrength: 'weak' | 'medium' | 'strong' | '' = '';

  showPassword = false;
  showConfirmPassword = false;
  successMessage = '';

  country = { name: 'مصر', code: '+20' };
  countries = [
    { name: 'مصر', code: '+20' }, { name: 'السعودية', code: '+966' },
    { name: 'الإمارات', code: '+971' }, { name: 'الكويت', code: '+965' },
    { name: 'قطر', code: '+974' }, { name: 'الأردن', code: '+962' },
    { name: 'المغرب', code: '+212' }, { name: 'أمريكا', code: '+1' },
    { name: 'فرنسا', code: '+33' }, { name: 'ألمانيا', code: '+49' },
    { name: 'بريطانيا', code: '+44' }, { name: 'تركيا', code: '+90' },
    { name: 'اليابان', code: '+81' }, { name: 'الهند', code: '+91' },
    { name: 'روسيا', code: '+7' }
  ];

  constructor(private router: Router, private auth: AuthService) {}

  switchView(view: 'login' | 'signup') {
    this.view = view;
    this.clearForm();
  }

  clearForm() {
    this.fullName = '';
    this.phone = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.passwordStrength = '';
    this.successMessage = '';
    this.showPassword = false;
    this.showConfirmPassword = false;
  }

  checkPasswordStrength(value: string) {
    this.password = value;
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    const medium = /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).{6,}$/;

    if (strong.test(value)) this.passwordStrength = 'strong';
    else if (medium.test(value)) this.passwordStrength = 'medium';
    else this.passwordStrength = value ? 'weak' : '';
  }

  validateEmail(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  validatePassword(password: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/.test(password);
  }

  signup() {
    if (!this.validateEmail(this.email)) return alert('يرجى إدخال إيميل صحيح.');
    if (!/^[0-9]+$/.test(this.phone)) return alert('رقم الهاتف يجب أن يكون أرقام فقط.');
    if (!this.validatePassword(this.password)) return alert('كلمة المرور غير قوية.');
    if (this.password !== this.confirmPassword) return alert('كلمات المرور غير متطابقة.');

    if (!confirm('هل أنت متأكد من إنشاء الحساب؟')) return;

    this.auth.register(this.email, this.password);
  }

  login() {
    if (!this.email || !this.password) return alert('يرجى إدخال الإيميل وكلمة المرور.');
    this.auth.login(this.email, this.password);
  }

  forgotPassword() {
    if (!this.email) return alert('من فضلك أدخل بريدك الإلكتروني أولاً.');
    this.auth.resetPassword(this.email);
  }
}
