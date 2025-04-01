'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    ZOHO: any;
  }
}

export default function Zoho() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ZOHO) {
      window.ZOHO.CREATOR.init().then(() => {
        const apiCredentials = {
          appName: 'next-shop',
          reportName: 'All_Products'
        };
        window.ZOHO.CREATOR.API.getAllRecords(apiCredentials)
          .then(function (response: { code: number; data: any[]; }) {
            if (response && response.code === 3000 && response.data.length > 0) {
              const tasks = response.data.map((item) => item.Task);
              setTasks(tasks);
              console.log('response', response);
            } else {
              console.error('Failed to retrieve tasks.');
            }
          })
          .catch(function (error: any) {
            console.error('Error fetching tasks:', error);
          });

        console.log('Zoho SDK Initialized');
      });
    } else {
      console.error('Zoho SDK not loaded.');
    }
  }, []);

  return (
    <>
      <Script
        src="https://js.zohostatic.com/creator/widgets/version/1.0/widgetsdk-min.js"
        strategy="beforeInteractive"
      />
      <div className='flex align-middle p-4'>
        <h1 className='p-6'>Zoho Tasks</h1>
        <ul className='align-middle m-0'> 
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
