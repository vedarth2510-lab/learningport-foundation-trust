
import React, { useState, useEffect } from 'react';
import { Building2, Smartphone, CreditCard, FileText } from 'lucide-react';
import DonationMethodCard from './DonationMethodCard';

function DonationInfo() {
  const [settings, setSettings] = useState({
    bank_name: 'HDFC Bank',
    account_number: 'XXXX XXXX XXXX 1234',
    ifsc_code: 'HDFC0001234',
    account_holder: 'Learningport Foundation Trust',
    upi_id: 'learningport@upi',
    qr_image_url: ''
  });

  useEffect(() => {
    fetch('/api/donations')
      .then(res => res.json())
      .then(data => {
        if (data && data.upi_id) {
          setSettings(data);
        }
      })
      .catch(err => console.log('Donations API error, using fallback', err));
  }, []);

  const donationMethods = [
    {
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Direct bank transfer for secure donations',
      details: {
        bankName: settings.bank_name,
        accountNumber: settings.account_number,
        ifscCode: settings.ifsc_code,
        branch: settings.account_holder,
      },
      instructions: 'Please send the transaction receipt to our email for tax exemption certificate.',
    },
    {
      name: 'UPI Donation',
      icon: Smartphone,
      description: 'Quick and easy UPI payments',
      details: {
        upiId: settings.upi_id,
      },
      instructions: 'Scan the QR code or use the UPI ID to make instant donations. Screenshot the payment confirmation for records.',
    },
    {
      name: 'Online Payment',
      icon: CreditCard,
      description: 'Credit/Debit card and net banking',
      instructions: 'Click below to proceed to our secure payment gateway. All major cards and net banking options accepted.',
      actionLabel: 'Donate Online',
      action: () => {
        alert('Online payment gateway integration coming soon');
      },
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donationMethods.map((method) => (
          <DonationMethodCard key={method.name} method={method} />
        ))}
      </div>

      <div className="bg-muted rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Tax Exemption Information</h3>
            <p className="text-sm leading-relaxed mb-3">
              Learningport Foundation Trust is registered under Section 80G of the Income Tax Act. All donations are eligible for 50% tax deduction.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• 80G Registration Number: AAATL1234F</li>
              <li>• PAN: AAATL1234F</li>
              <li>• Tax exemption certificates will be issued for all donations</li>
              <li>• Receipts are sent via email within 48 hours</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-3">UPI QR Code</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border border-border overflow-hidden">
            {settings.qr_image_url ? (
              <img src={settings.qr_image_url} alt="UPI QR Code" className="w-full h-full object-contain p-2" />
            ) : (
              <p className="text-sm text-center text-muted-foreground px-4">QR Code will be displayed here</p>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed mb-3">
              Scan this QR code with any UPI app (Google Pay, PhonePe, Paytm, etc.) to make instant donations.
            </p>
            <p className="text-sm font-medium">UPI ID: {settings.upi_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationInfo;
